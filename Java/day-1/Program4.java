import java.util.Scanner;
public class Program4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        System.out.print("Enter your salary: ");
        double salary = scanner.nextDouble();
        
        System.out.println("Hello, " + name + "! You are " + age + " years old and your salary is $" + salary + ".");
        
        scanner.close();
    }
}