-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "quantity" INTEGER NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_products" ("description", "id", "name", "price", "quantity") SELECT "description", "id", "name", "price", "quantity" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
