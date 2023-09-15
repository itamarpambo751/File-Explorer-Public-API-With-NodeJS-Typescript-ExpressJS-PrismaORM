-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Archive" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fieldname" TEXT NOT NULL,
    "originalname" TEXT NOT NULL,
    "encoding" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "reason_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "uploadedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Archive_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Archive_reason_id_fkey" FOREIGN KEY ("reason_id") REFERENCES "Reason" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Archive" ("destination", "encoding", "fieldname", "filename", "id", "mimetype", "originalname", "path", "reason_id", "size", "user_id") SELECT "destination", "encoding", "fieldname", "filename", "id", "mimetype", "originalname", "path", "reason_id", "size", "user_id" FROM "Archive";
DROP TABLE "Archive";
ALTER TABLE "new_Archive" RENAME TO "Archive";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
