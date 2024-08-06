# Next.js 14 Inventory Management Dashboard

## Overview

This project is an inventory management system built using **Next.js**, **Node.js**, and **TypeScript**. It provides a dashboard to manage inventory with features such as product management, order tracking, and reporting. The system is deployed using AWS services including EC2, RDS, and S3.

## Features

- **Frontend (Client)**:

  - Built with **Next.js 14** for server-side rendering and static site generation.
  - **Tailwind CSS** for modern, utility-first styling.
  - Responsive design for various screen sizes.

- **Backend (Server)**:

  - Built with **Node.js** and **Express**.
  - **PostgreSQL** for relational database management.
  - **TypeScript** for type safety and improved development experience.

- **Deployment**:
  - **AWS EC2** for hosting the application.
  - **AWS RDS** for managed PostgreSQL database.
  - **AWS S3** for file storage.

## Installation

### Prerequisites

- **Node.js** (>= 14.x)
- **PostgreSQL**
- **AWS account** (for EC2, RDS, S3)

### Clone the Repository

```bash
git clone git@github.com:chaad98/IMS.git
cd IMS
```

## Backend Setup

1. **Navigate to the server directory:**

   ```bash
   cd server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables.** Create a `.env` file in the `server` directory and add the following configuration:

   ```env
   DATABASE_URL=your_postgres_database_url
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_BUCKET_NAME=your_s3_bucket_name
   ```

4. **Build the project:**

   ```bash
   npm run build
   ```

5. **Start the server:**

   ```bash
   npm start
   ```

## Frontend Setup

1. **Navigate to the client directory:**

   ```bash
   cd ../client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Build the project:**

   ```bash
   npm run build
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

## Deployment

### AWS EC2

1. Launch an EC2 instance and configure it for your application.
2. Ensure the security groups allow HTTP and HTTPS traffic.
3. Deploy your application to the EC2 instance. Use deployment tools like **PM2** or **Docker** if needed.

### AWS RDS

1. Set up an RDS PostgreSQL instance.
2. Update the `DATABASE_URL` in your `.env` file with the RDS endpoint.

### AWS S3

1. Create an S3 bucket for file storage.
2. Update your application's configuration to use the S3 bucket for storing and retrieving files.

## Usage

- Access the dashboard at `http://your-ec2-public-ip`.
- Use the web interface to manage inventory, view reports, and handle administrative tasks.

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your forked repository.
4. Create a pull request describing your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Node.js](https://nodejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [AWS](https://aws.amazon.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Contact

For any questions or support, please contact Chad.
