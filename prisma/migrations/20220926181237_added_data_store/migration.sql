/*
  Warnings:

  - You are about to drop the `updid` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `updid`;

-- CreateTable
CREATE TABLE `datastore` (
    `id` VARCHAR(250) NOT NULL,
    `value` VARCHAR(250) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
