import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String text = sc.next();

        if ( text.equals("S"))
            System.out.print("Superior");
        else if (text.equals("A"))
            System.out.print("Exellent");
        else if (text.equals("B"))
            System.out.print("Good");
        else if (text.equals("C"))
            System.out.print("Usually");
        else if (text.equals("D"))
            System.out.print("Effort");
        else 
            System.out.print("Failure");

    }
}