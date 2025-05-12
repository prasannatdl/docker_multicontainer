# Use a minimal base image
FROM node:20-alpine

# Create non-root user and switch to it
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Create app directory
WORKDIR /home/appuser/app

# Copy files and install only production dependencies
COPY --chown=appuser:appgroup . .

# Install dependencies
RUN npm install --only=production

# Expose port
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
