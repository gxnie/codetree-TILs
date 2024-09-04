import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a_age = sc.nextInt();
        String a_gender = sc.next();

        int b_age = sc.nextInt();
        String b_gender = sc.next();

        String man = "M";

        if(((a_age >= 19) || ( b_age >= 19)) && ((a_gender.equals(man)) || (b_gender.equals(man)))){
            System.out.print("1");
        } else {
            System.out.print("0");
        }
    }
}