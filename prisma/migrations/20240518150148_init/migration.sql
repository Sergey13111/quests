-- CreateTable
CREATE TABLE "Quest" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "previewImg" TEXT NOT NULL,
    "coverImg" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "peopleCount" INTEGER[],
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Quest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderQuest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "peopleCount" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "isLegal" BOOLEAN NOT NULL,

    CONSTRAINT "OrderQuest_pkey" PRIMARY KEY ("id")
);
