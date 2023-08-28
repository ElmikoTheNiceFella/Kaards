-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card" (
    "cardId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("cardId")
);

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
