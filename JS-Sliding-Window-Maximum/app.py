arr = [1,3,-1,-3,5,3,6,7]
k = 3

def printMax(arr, k):
    my_list=[]
    max = 0
   
    for i in range(len(arr)-k+1):
        max = arr[i]
        
        for j in range(1,k):
          if arr[i+j] > max:
             max = arr[i+j]
        my_list.append(max)
        
    print(my_list)             
printMax(arr, k)