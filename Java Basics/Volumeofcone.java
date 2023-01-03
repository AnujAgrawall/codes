import java.util.Scanner;

public class Volumeofcone {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("enter radius:");
        int radius = in.nextInt();
        System.out.print("enter height:");
        int height = in.nextInt();
        float Volumeofcone = (3.14f*radius*radius*height/3);
        System.out.println("Volume of cone ="+ Volumeofcone);
    }
}
