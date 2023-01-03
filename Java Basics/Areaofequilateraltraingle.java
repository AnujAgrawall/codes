import java.util.Scanner;

public class Areaofequilateraltraingle {
    public static void main(String[] args) {
          try (Scanner in = new Scanner(System.in)) {
            System.out.print("enter side:");
            int side = in.nextInt();
            float Areaofequilateraltraingle = (1.732f*side*side)/4;
            System.out.println("Areaofequilateraltriangle =" + Areaofequilateraltraingle);
        }

    }
    
}
