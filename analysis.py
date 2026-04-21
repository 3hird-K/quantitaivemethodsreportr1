import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# 1. Prepare the dataset from your research report
data = {
    'RAM_GB': [8, 8, 16, 16, 4, 32, 16, 8, 12, 64, 8, 16, 4, 32, 8, 16, 8, 4, 16, 32, 8, 16, 8, 4, 16, 32, 8, 16, 12, 16],
    'SSD_GB': [256, 512, 512, 1024, 128, 1024, 256, 1024, 512, 2048, 256, 512, 256, 512, 128, 256, 512, 128, 1024, 512, 256, 512, 512, 256, 1024, 1024, 256, 512, 256, 1024],
    'Price_PHP': [28500, 32000, 45000, 52000, 18900, 85000, 38000, 39500, 35500, 145000, 27900, 46000, 22000, 65000, 24500, 38000, 31500, 17500, 54000, 62000, 29000, 44500, 33000, 21000, 55500, 82000, 28200, 43800, 34000, 53200]
}

df = pd.DataFrame(data)

# 2. Define Independent (X) and Dependent (y) variables
X = df[['RAM_GB', 'SSD_GB']]
y = df['Price_PHP']

# 3. Create and Fit the Multiple Regression Model
model = LinearRegression()
model.fit(X, y)

# 4. Extract Coefficients
alpha = model.intercept_
beta1, beta2 = model.coef_
r_squared = model.score(X, y)

print("--- REGRESSION RESULTS ---")
print(f"Intercept (alpha): {alpha:.2f}")
print(f"RAM Coefficient (beta1): {beta1:.2f}")
print(f"SSD Coefficient (beta2): {beta2:.2f}")
print(f"R-squared: {r_squared:.4f}")

# 5. Visualization: Price vs RAM
plt.figure(figsize=(12, 5))

plt.subplot(1, 2, 1)
plt.scatter(df['RAM_GB'], df['Price_PHP'], color='blue', alpha=0.7)
plt.title('Price vs RAM Capacity')
plt.xlabel('RAM (GB)')
plt.ylabel('Price (PHP)')
plt.grid(True, linestyle='--', alpha=0.6)

# Visualization: Price vs SSD
plt.subplot(1, 2, 2)
plt.scatter(df['SSD_GB'], df['Price_PHP'], color='green', alpha=0.7)
plt.title('Price vs SSD Storage')
plt.xlabel('SSD (GB)')
plt.ylabel('Price (PHP)')
plt.grid(True, linestyle='--', alpha=0.6)

plt.tight_layout()
plt.show()

# 6. Example Prediction Function
def predict_price(ram, ssd):
    return alpha + (beta1 * ram) + (beta2 * ssd)

print(f"\nExample Prediction for 16GB RAM, 512GB SSD: PHP {predict_price(16, 512):,.2f}")