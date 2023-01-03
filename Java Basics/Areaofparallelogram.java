import java.util.Scanner;

public class Areaofparallelogram {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("enter base:");
        int base = in.nextInt();
        System.out.print("enter height:");
        int height = in.nextInt();
        int Areaofparallelogram =(height*base);
        System.out.println("Areaofrectangle="+ Areaofparallelogram);
    }
}
