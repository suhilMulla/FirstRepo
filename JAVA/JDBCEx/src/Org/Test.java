package Org;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Test {

	public static void main(String[] args) throws Exception {
		
		String url = "jdbc:mysql://localhost:3306/students?useSSL=false";
		String username = "root";
		String password = "1234";
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection(url, username, password);
		String query = "select Roll_no, firstname, age from students";
		Statement st = con.createStatement();
		ResultSet rs = st.executeQuery(query);
		while(rs.next())
		{
			int r = rs.getInt("Roll_no");
			String n = rs.getString("FirstName");
			int a = rs.getInt("Age");
			System.out.println(n);
			System.out.println(a);
		}
		con.close();

	}

}
