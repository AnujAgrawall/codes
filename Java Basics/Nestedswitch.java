import java.util.Scanner;

public class Nestedswitch {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int empID = in.nextInt();
        String department = in.next();

        switch (empID) {
        case 1: 
        System.out.println("Anuj Agrawal");
                break;
                case 2:
                System.out.println("kunal kushwaha");
                 break;
                 case 3:
                 System.out.println("emp number 3");
                 switch(department) {
                    case "It":
                    System.out.println("IT department");
                      break;
                      case "management":
                      System.out.println("management department");
                        break;
                        default:
                        System.out.println("no department");
                   }
                    break;
                   default:
                     System.out.println("correct employee ID");
                      
            
        }
    }
}
