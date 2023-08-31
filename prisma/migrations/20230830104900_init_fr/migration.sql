-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card" (
    "cardId" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("cardId")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
