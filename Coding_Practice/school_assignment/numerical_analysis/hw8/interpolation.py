import cv2
import sys
import numpy as np


def bi_interpolation(image):
    height, width, channel = image.shape
    print(width, height)
    print("가로 크기를 입력하세요")
    new_width = int(input())
    print("세로 크기를 입력하세요")
    new_height = int(input())

    new_img = np.full((new_height, new_width, 3), 255, dtype=np.uint8)
    rate_width = new_width / width
    rate_height = new_height / height

    print("가로 증가 비율: ", rate_width)
    print("세로 증가 비율: ", rate_height)

    for i in range(0, new_height):
        for j in range(0, new_width):
            origin_x = int(j / rate_width)
            origin_y = int(i / rate_height)

            dx1 = j / rate_width - origin_x
            dx2 = 1 - dx1
            dy1 = i / rate_height - origin_y
            dy2 = 1 - dy1

            if origin_x + 1 == width:
                origin_x -= 1
            if origin_y + 1 == height:
                origin_y -= 1

            px1 = image[origin_y, origin_x]
            px2 = image[origin_y, origin_x + 1]
            px3 = image[origin_y + 1, origin_x]
            px4 = image[origin_y + 1, origin_x + 1]

            w1 = dx2 * dy2
            w2 = dx1 * dy2
            w3 = dx2 * dy1
            w4 = dx1 * dy1

            new_img[i, j] = w1 * px1 + w2 * px2 + w3 * px3 + w4 * px4
    return new_img


img = cv2.imread("airplane.jpg", cv2.IMREAD_ANYCOLOR)
if img is None:
    print("No Image")
    sys.exit()

result_img = bi_interpolation(img)
cv2.imshow("AirPlane_Original", img)
cv2.imshow("AirPlane_Output", result_img)
cv2.waitKey()
cv2.destroyAllWindows()
