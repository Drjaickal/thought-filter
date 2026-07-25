-- DropIndex
DROP INDEX "Rewrite_thoughtId_idx";

-- DropIndex
DROP INDEX "Thought_userId_idx";

-- CreateIndex
CREATE INDEX "Rewrite_thoughtId_createdAt_idx" ON "Rewrite"("thoughtId", "createdAt");

-- CreateIndex
CREATE INDEX "Thought_userId_createdAt_idx" ON "Thought"("userId", "createdAt");
