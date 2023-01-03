import java.util.Scanner;

public class Arrays {
    public static void update(int marks[], int nonchangeable) {
        nonchangeable = 10;
        for(int i=0; i<marks.length; i++) {
            marks[i] = marks[i] + 1;
        }


    }
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
//        int Numbers[] = new int[10];
//        System.out.println("length of array ="+ Numbers.length);
//         Numbers[0] = in.nextInt();
//         Numbers[1] = in.nextInt();
//         Numbers[2] = in.nextInt();
//
//         System.out.println("phy"+Numbers[0]);
//        System.out.println("chem"+Numbers[1]);
//        System.out.println("maths"+Numbers[2]);
////        Numbers[1] += 1;
////        System.out.println("chem" + Numbers[1]);
//        int percentage = (Numbers[0] + Numbers[1] + Numbers[2])/3;
//        System.out.println("percentage = "+ percentage+"%");


        //Passing arrays as arguments
        //
        int marks[] = {98,99,95};
        int nonChangeable=5;
        update(marks,nonChangeable);
        System.out.println(nonChangeable);
        for(int i=0; i<marks.length; i++){
            System.out.print(marks[i]+" ");
        }
        System.out.println();
    }
}
