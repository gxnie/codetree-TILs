import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        if ((a > b && a < c) || ( a > c && a < b)){ // a가 중간 값일 때
            System.out.print(a);
        } else if((b > a && b < c)||(b < a && b > c)){ //b가 중간 값일 때 
            System.out.print(b);
        } else {
            System.out.print(c);
        }
    }
}