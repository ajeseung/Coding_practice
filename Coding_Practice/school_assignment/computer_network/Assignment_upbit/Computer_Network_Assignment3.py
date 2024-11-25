import asyncio
import websockets
import json

async def binance_websocket():      #Step A
    uri = "wss://stream.binance.com:443/ws/btcusdt@depth5"
    async with websockets.connect(uri) as websocket:
        with open("stream-data-binance.txt", "a") as file:
            while True:
                data = await websocket.recv()
                data_json = json.loads(data)
                file.write(json.dumps(data_json) + "\n")

# Run the WebSocket client for Step A
# asyncio.get_event_loop().run_until_complete(binance_websocket())

async def upbit_websocket():        #Step B
    uri = "wss://api.upbit.com/websocket/v1"
    async with websockets.connect(uri) as websocket:
        # Subscribe to the desired topic
        subscribe_message = json.dumps([{"ticket":"UNIQUE_TICKET"},{"type":"orderbook","codes":["KRW-BTC"]}])
        await websocket.send(subscribe_message)

        with open("stream-data-upbit.txt", "a") as file:
            while True:
                data = await websocket.recv()
                data_json = json.loads(data)
                file.write(json.dumps(data_json) + "\n")

# Run the WebSocket client for Step B
# asyncio.get_event_loop().run_until_complete(upbit_websocket())

async def main():               #Step C
    await asyncio.gather(
        binance_websocket(),
        upbit_websocket()
    )

# Run both WebSocket clients for Step C
asyncio.get_event_loop().run_until_complete(main())