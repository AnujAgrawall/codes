import java.util.Scanner;

public class Volumeofpyramid {
    public static void main(String[] args) {
        Scanner in =new Scanner(System.in);
        System.out.print("enter base length:");
        int baselength= in.nextInt();
        System.out.print("enter base width:");
        int basewidth = in.nextInt();
        System.out.print("enter height:");
        int height = in.nextInt();
        int Volumeofpyramid = (baselength*basewidth*height)/3;
        System.out.println("Volume of pyramid ="+ Volumeofpyramid);

    }
}
