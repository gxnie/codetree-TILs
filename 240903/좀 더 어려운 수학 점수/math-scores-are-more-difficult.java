import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int aEng = sc.nextInt();
        int aMath = sc.nextInt();

        int bEng = sc.nextInt();
        int bMath = sc.nextInt();

        if ( aMath > bMath || (aMath == bMath) && (aEng > bEng)){
            System.out.print("A");
        } else {
            System.out.print("B");
        }
    }
}