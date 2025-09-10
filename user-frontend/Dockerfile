# Sử dụng Node.js làm base image
FROM node:18-alpine          

# Tạo thư mục làm việc
WORKDIR /app                 

# Copy file package.json và package-lock.json
COPY package*.json ./        

# Cài đặt các dependency
RUN npm install              

# Copy toàn bộ mã nguồn
COPY . .                     

# Build ứng dụng
RUN npm run build            

# Mở cổng ứng dụng
EXPOSE 3000                  

# Chạy ứng dụng
CMD ["npm", "start"]         
