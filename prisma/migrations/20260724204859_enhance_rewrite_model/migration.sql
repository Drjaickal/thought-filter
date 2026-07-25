-- AlterTable
ALTER TABLE "Rewrite" ADD COLUMN     "audience" TEXT,
ADD COLUMN     "model" TEXT,
ADD COLUMN     "promptVersion" TEXT,
ADD COLUMN     "toxicity" DOUBLE PRECISION;
