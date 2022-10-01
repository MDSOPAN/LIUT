-- CreateTable
CREATE TABLE `Questions` (
    `body` VARCHAR(255) NOT NULL,
    `options` JSON NOT NULL,
    `answers` JSON NOT NULL,
    `ExamNo` INTEGER NULL,
    `id` BIGINT NOT NULL AUTO_INCREMENT,

    INDEX `body`(`body`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exams` (
    `No` INTEGER NOT NULL AUTO_INCREMENT,
    `time` INTEGER NULL,

    PRIMARY KEY (`No`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `updid` (
    `id` VARCHAR(250) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Questions` ADD CONSTRAINT `Questions_ExamNo_fkey` FOREIGN KEY (`ExamNo`) REFERENCES `Exams`(`No`) ON DELETE SET NULL ON UPDATE CASCADE;
