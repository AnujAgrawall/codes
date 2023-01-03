import java.util.Scanner;

public class Assignment {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        
      //  System.out.println("enter details :" );
   //     int a = in.nextInt();
     //   if(a % 2 ==0){
       //     System.out.println("number is even :");
       // }else{
       //     System.out.println("number is odd :");
       // }
   //    String s =in.nextLine();
     //  System.out.println("happy birthday " + s);
     
   /*   System.out.println("enter principle:");
     int principle = in.nextInt();
     
     System.out.println("enter time");
     int time = in.nextInt();
     
     System.out.println("enter rate");
     int rate = in.nextInt();

     int simpleintrest = (principle*time*rate) / 100;
     System.out.println("simpleintrest ="+ simpleintrest);
    System.out.println("enter num1");
     int a = in.nextInt();
     System.out.println("enter num2");
     int b = in.nextInt();
     System.out.println("your sum is ");
     int sum = (a*b);
     System.out.println(sum);        

    System.out.println("enter num1");
     int a = in.nextInt();
     System.out.println("enter num2");
     int b = in.nextInt();
     if(a>b) {
        System.out.println("a is largest:"+a);
     }else{
        System.out.println("b is largest:"+ b);
     }

       System.out.println("enter your indian rupees");
       int a = in.nextInt();
       float usd = a*82.61f;
       System.out.println("usd="+usd);          

       int sum = 0, n;
       int a = 0;
       int b = 1;
       System.out.println("Enter the nth value: ");
       n = in.nextInt();
       System.out.println("Fibonacci series: ");
        while(sum <= n)
        {
       System.out.print(sum + " ");
       a = b;  // swap elements
        b = sum;
       sum = a + b;  // next term is the sum of the last two terms 
       }  */
     
    //BasicJava Programs
    //Q1 are of circle
   /*  System.out.println("enter radius=");//used float beacuse ans will be in decimal
    int a = in.nextInt();
    float areaofcircle =(3.14f*a*a);
    System.out.println("area of circle ="+ areaofcircle);
    //area of tringle 
       System.out.println("enter height of triangle:");
       int h = in.nextInt();
       System.out.println("enter base of the triangle:");
       int b = in.nextInt();
       int aot=(h*b/2);
       System.out.println("area of triangle ="+ aot);



       Q3 area of Rectangle

       System.out.println("enter length");
       int l = in.nextInt();
       System.out.println("enter b");
       int b = in.nextInt();
       int aor= (l*b);
       System.out.println("area of rectangle ="+ aor);


       //factorial of a number with input
       int n = in.nextInt();
      for(int i=1; i<n; i++) {
        if(n%i==0){
          System.out.println(i);
          System.out.print("input num:");
          int n = in.nextInt();
          for( int i = 1; i < n; i++) {
             if (n % i==0) {
              System.out.println(i);

             }

          }
          int fact = 1;
         int n = in.nextInt();
         for(int i = 1; i<=n;i++) {
           fact = fact*i;
          System.out.println(fact);
         }
         System.out.print("enter your units:");
         int units = in.nextInt();
         double rate=1;
         if(units <=100) {
          rate = units * 7;
         }
          else if (units <=200) {
            rate = units *8;
          }
         else if(units <=300) {
          rate = units *9;
         }
         else if (units >= 300) {
          rate = units * 10;
         }
         System.out.println("your electricity bill is="+ rate);*/
         System.out.print("enter number");
         int n = in.nextInt();
         int a = 0;
         int b = 1;
         int count = 2;

         for(int i=1; i <=n; i++) {
          int temp = b;
          b= b+a;
          a = temp;
          count++;
          

         }
         System.out.print(b);
          }
         
        } 
      
       
       
       







