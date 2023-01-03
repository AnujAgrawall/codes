import java.util.Scanner;

public class Perimeterofparallelogram {
    public static void main(String[] args) {
        Scanner in= new Scanner(System.in);
        System.out.println("enter base:");
        int base = in.nextInt();
        System.out.println("enter side:");
        int side = in.nextInt();
        int Perimeterofparallelogram = (2*(base+side));
        System.out.println("Perimeterofparallelogram="+Perimeterofparallelogram);
    }
    
}
