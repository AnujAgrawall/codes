 import java.util.Scanner;
public class Switch {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        /* 
        System.out.println("enter fruit");
        String fruit = in.next();
        
       if(fruit.equals("mango")) {
        System.out.println("king of fruits");
       }
       if(fruit.equals("apple")) {
        System.out.println("a sweet red fruit");
       }
       
      switch (fruit) {
        case "mango":
        System.out.println("king of fruit");
             break;
        case "apple":
            System.out.println("red sweet fruit");
              break;
        case"orange":
            System.out.println("orange colour round fruit");
              break;
        case "banana":
            System.out.println("yellow long sweet fruit");
              break;
        default:
        System.out.println("don't have this fruit");
              break;
      }*/
      System.out.println("enter day");
      int day = in.nextInt();
      switch (day) {
        case 1 -> System.out.println("monday");
        case 2 -> System.out.println("tuesday");
        case 3 -> System.out.println("wednesday");
        case 4 -> System.out.println("thrusday");
        case 5 -> System.out.println("friday");
        case 6 -> System.out.println("saturday");
        case 7 -> System.out.println("sunday");
        default -> System.out.println("there are only seven days in a week");
      }
      

    }
}
