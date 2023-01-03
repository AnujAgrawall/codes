import java.util.Scanner;
public class Conditions {
    public static void main(String[] args) {
        //conditions
        Scanner in = new Scanner(System.in);
         System.out.println("input salary");
        int salary = in.nextInt();
      /*   if(salary > 10000) {
            salary+= 2000;
        }else{
            salary += 1000;
        }
        System.out.println(salary);*/

        if(salary >= 15000) {
            salary += 3000;
        } else if (salary >= 10000) {
            salary += 2000;
        } else {
            salary += 1000;
        }
        System.out.println(salary);
    }

}
