import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int math1 = sc.nextInt();
        int Eng1 = sc.nextInt();

        int math2 = sc.nextInt();
        int Eng2 = sc.nextInt();

        if (math1 > math2 && Eng1 > Eng2){
            System.out.print("1");
        } else {
            System.out.print("0");
        }
    }
}