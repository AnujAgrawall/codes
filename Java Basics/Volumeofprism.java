import java.util.Scanner;

public class Volumeofprism {
    public static void main(String[] args) {
        Scanner in =new Scanner(System.in);
        System.out.print("enter base:");
        double base = in.nextDouble();
        System.out.print("enter height:");
        double height = in.nextDouble();
        double Volumeofprism = (base*height);
        System.out.println("Volume of prism="+ Volumeofprism);;
    }
}
