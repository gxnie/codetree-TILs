import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int b = sc.nextInt();
        int a = sc.nextInt();

        for(int i = b; b >= a; b--){
            if(b % 2 == 1 && a % 2 == 1){
                System.out.print(b+" ");
            }
        }
    }
}