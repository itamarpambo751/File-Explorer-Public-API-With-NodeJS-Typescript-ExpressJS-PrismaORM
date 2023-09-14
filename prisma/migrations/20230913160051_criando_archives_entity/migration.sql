-- CreateTable
CREATE TABLE "Archives" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "file_name" TEXT NOT NULL,
    "file_location" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "size" INTEGER NOT NULL
);
