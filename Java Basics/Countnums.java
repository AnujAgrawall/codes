public class Countnums {
    public static void main(String[] args) {
        int n = 455555436;

        int count = 0;
        while (n >0) {
            int rem =n % 10;
            if (rem== 5) {
                count++;

            }
            n = n / 10; //n /= 10
            
        }
        System.out.println(count);
    }
}
