class Solution:
    def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
        for i in range(len(image)):
            image[i] = reversed(image[i])
            image[i] = map(lambda x: 1 if x == 0 else 0, image[i])
        return image

#  for i in range(len(image)):
#             # Reverse the row
#             image[i] = list(reversed(image[i]))
#             # Invert the image
#             image[i] = list(map(lambda x: 1 if x == 0 else 0, image[i]))
#         return image
        