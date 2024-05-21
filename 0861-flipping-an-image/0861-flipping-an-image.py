class Solution:
    def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
        for i in range(len(image)):
            image[i] = reversed(image[i])
            image[i] = map(lambda n: 0 if n == 1 else 1, image[i])
        return image

        