import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        if ( a > b && a < c ){
            System.out.print(a);
        } else { // a가 b보다 작고, c보다 클때
            if(b < c){ 
                System.out.print(b);
            } else {
                System.out.print(c);
            }
        }
    }
}