#include <stdio.h>

int main(){
	int arr[]={5,7,7,8,8,10};
	int ans[]={};
	int fans[]={};
	int len1 = sizeof(arr)/sizeof(arr[0]);
	int target;
	printf("enter a targeted value : ");
	scanf("%d",&target);
	int i;
	for(i=0;i<len1;i++){
		if(arr[i]==target){
			ans[i]=i;
		}
	}
	int len2 = sizeof(ans)/sizeof(ans[0]);
	printf("%d",len2);
}
