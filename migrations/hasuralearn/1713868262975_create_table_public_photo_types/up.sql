CREATE TABLE "public"."photo_types" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "photo_name" text NOT NULL, "photo_size" integer NOT NULL, "photo_description" text NOT NULL, PRIMARY KEY ("id") );COMMENT ON TABLE "public"."photo_types" IS E'types of photos';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
