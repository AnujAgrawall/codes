import java.util.Scanner;

public class Perimeterofcircle {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("enter radius:");
        int radius = in.nextInt();
        float Perimeterofcircle = (2*3.14f*radius);
        System.out.println("perimeterofcircle="+Perimeterofcircle);    
    }
}
