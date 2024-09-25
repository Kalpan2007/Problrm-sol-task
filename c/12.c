// 12. Add the number 6 to the end of the array arr = [1, 2, 3, 4, 5] and print the updated array.

#include <stdio.h>
int main() {
	int arr[] = {1, 2, 3, 4, 5};
	int len = sizeof(arr)/sizeof(arr[0]);
	arr[len] = 6 ;
	printf("%d\n",arr[5]);
	len++;
	printf("%d\n",len);
	 return 0;
}
