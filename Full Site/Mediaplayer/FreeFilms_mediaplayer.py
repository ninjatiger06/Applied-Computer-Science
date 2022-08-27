"""
    Credit to: https://learnopencv.com/read-write-and-display-a-video-using-opencv-cpp-python/
"""

import cv2
import numpy as np

def main():
    # Create video capture
    cap = cv2.VideoCapture("../movie.mp4")
    print(cap)
    # Build window to display video
    cv2.namedWindow('FreeFilms Media Player', cv2.WINDOW_AUTOSIZE)

    while True:
        # Capture video frame-by-frame
        ret, frame = cap.read()
        if ret == True:
            # Display the frame
            cv2.imshow('Frame', frame)

            # Press q to exit
            if cv2.waitKey(25) & 0xFF == ord('q'):
                break

            # else:
            #     break

    # Release when everything is done
    cap.release()

    # Close all frames
    cv2.destroyAllWindows()
main()
