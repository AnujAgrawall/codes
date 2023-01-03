import java.util.Scanner;

public class Linearsearch {
    public static int linearsearch(int numbers[], int key) {
        for(int i = 0; i <numbers.length; i++) {
            if(numbers[i] == key){
            return i;
        }
      }
        return -1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int numbers[] = {2,3,5,7,6,8,9,4,5,56};
        int key = 60;
        int index = linearsearch(numbers,key);
        if(index == -1) {
            System.out.println("key not found");
        }else{
            System.out.println("key is at index");
        }

    }
}
