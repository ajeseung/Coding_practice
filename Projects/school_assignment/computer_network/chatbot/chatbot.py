import time
import requests
import telepot
from apscheduler.schedulers.background import BackgroundScheduler

# Set your Etherscan API key and Telegram Bot token here
ETHERSCAN_API_KEY = 'YIXN1TTAWF1M44TD1XKFN5V4Y434S3974V'
TELEGRAM_BOT_TOKEN = '6597998560:AAGwo2M1iqigytnD4zx2WW-pgYTaHTI4Y0E'
TELEGRAM_BOT_NAME = 'SON_Telegram_Assignment1'  

# Initialize the Telegram bot
bot = telepot.Bot(TELEGRAM_BOT_TOKEN)

# Store the chat IDs of users who want to receive updates
chat_ids = set()

previous_safe_gas_price = None

def get_gas_price():
    try:
        url = f'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey={ETHERSCAN_API_KEY}'
        response = requests.get(url)
        data = response.json()
        
        if data['status'] == '1':
            gas_info = data['result']
            safe_gas_price = int(gas_info['SafeGasPrice'])
            fast_gas_price = gas_info['FastGasPrice']
            last_block = gas_info['LastBlock']
            
            return last_block, safe_gas_price, fast_gas_price
        else:
            return None, None, None
    except Exception as e:
        return None, None, None

def send_gas_price():
    global chat_ids, previous_safe_gas_price
    last_block, safe_gas_price, fast_gas_price = get_gas_price()
    current_time = time.strftime('%I:%M %p')
    
    if previous_safe_gas_price is not None:
        price_change = safe_gas_price - previous_safe_gas_price
    else:
        price_change = 0

    for chat_id in chat_ids:
        message = f'{TELEGRAM_BOT_NAME}      {current_time}\nLastBlock:{last_block}, SafeGasPrice:{safe_gas_price}, FastGasPrice:{fast_gas_price}, Change:{price_change}'
        bot.sendMessage(chat_id, message)

    previous_safe_gas_price = safe_gas_price

def handle_command(msg):
    chat_id = msg['chat']['id']
    command = msg['text']

    if command == '/stop':
        chat_ids.discard(chat_id)
        bot.sendMessage(chat_id, 'You will no longer receive updates. Type /start to resume.')
    elif command == '/start':
        chat_ids.add(chat_id)
        bot.sendMessage(chat_id, 'You will now receive updates every minute.')
    else:
        bot.sendMessage(chat_id, 'Unknown command. Type /start to receive updates.')

# Initialize and schedule the job to fetch and send gas prices every minute
scheduler = BackgroundScheduler()
scheduler.add_job(send_gas_price, 'interval', minutes=1)
scheduler.start()

# Start listening for messages and commands
bot.message_loop(handle_command)

while True:
    time.sleep(10)  # Keep the program running

# Cleanup when done
scheduler.shutdown()
