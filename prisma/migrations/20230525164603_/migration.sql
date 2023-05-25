-- AlterTable
CREATE SEQUENCE javali_id_seq;
ALTER TABLE "Javali" ALTER COLUMN "id" SET DEFAULT nextval('javali_id_seq');
ALTER SEQUENCE javali_id_seq OWNED BY "Javali"."id";
