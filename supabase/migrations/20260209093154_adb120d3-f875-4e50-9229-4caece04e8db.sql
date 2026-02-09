-- جدول سوابق تصادفات
CREATE TABLE public.accident_records (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  national_id TEXT NOT NULL,
  accident_date DATE NOT NULL,
  accident_type TEXT NOT NULL DEFAULT 'minor',
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- جدول دهک‌های درآمدی
CREATE TABLE public.income_deciles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  national_id TEXT NOT NULL UNIQUE,
  decile INTEGER NOT NULL CHECK (decile >= 1 AND decile <= 10),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- جدول نتایج Smart Score
CREATE TABLE public.smart_scores (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  national_id TEXT NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  accident_count INTEGER NOT NULL DEFAULT 0,
  income_decile INTEGER NOT NULL DEFAULT 5,
  smart_score INTEGER NOT NULL DEFAULT 50,
  discount_percent INTEGER NOT NULL DEFAULT 0,
  recommendation_type TEXT NOT NULL DEFAULT 'standard',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- جدول بیمه‌های پیشنهادی (با BIGINT برای قیمت‌های بزرگ)
CREATE TABLE public.insurance_recommendations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  type TEXT NOT NULL,
  base_price BIGINT NOT NULL,
  coverage_limit BIGINT NOT NULL,
  is_private BOOLEAN NOT NULL DEFAULT false,
  is_high_coverage BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- فعال کردن RLS
ALTER TABLE public.accident_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.income_deciles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.smart_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.insurance_recommendations ENABLE ROW LEVEL SECURITY;

-- سیاست‌های دسترسی عمومی (چون احراز هویت نداریم)
CREATE POLICY "Allow public read on accident_records"
  ON public.accident_records FOR SELECT
  USING (true);

CREATE POLICY "Allow public read on income_deciles"
  ON public.income_deciles FOR SELECT
  USING (true);

CREATE POLICY "Allow public all on smart_scores"
  ON public.smart_scores FOR ALL
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public read on insurance_recommendations"
  ON public.insurance_recommendations FOR SELECT
  USING (true);

-- داده‌های نمونه برای تصادفات
INSERT INTO public.accident_records (national_id, accident_date, accident_type, description) VALUES
('0012345678', '2025-03-15', 'minor', 'تصادف جزئی در پارکینگ'),
('0012345678', '2025-07-22', 'major', 'تصادف زنجیره‌ای در بزرگراه'),
('0023456789', '2025-05-10', 'minor', 'خسارت به سپر عقب'),
('0056789012', '2025-01-20', 'major', 'تصادف با موتورسیکلت');

-- داده‌های نمونه برای دهک درآمدی
INSERT INTO public.income_deciles (national_id, decile) VALUES
('0012345678', 3),
('0023456789', 7),
('0034567890', 5),
('0045678901', 9),
('0056789012', 2),
('0067890123', 8),
('0078901234', 4),
('0089012345', 10),
('0090123456', 1),
('0001234567', 6);

-- داده‌های نمونه برای بیمه‌های پیشنهادی
INSERT INTO public.insurance_recommendations (name, company, type, base_price, coverage_limit, is_private, is_high_coverage) VALUES
('بیمه شخص ثالث اقتصادی', 'پاسارگاد', 'third_party', 2500000, 500000000, true, false),
('بیمه بدنه ساده', 'کوثر', 'body', 4000000, 300000000, true, false),
('بیمه حوادث راننده', 'ملت', 'driver', 800000, 100000000, true, false),
('بیمه شخص ثالث جامع', 'ایران', 'third_party', 4500000, 1500000000, false, false),
('بیمه بدنه کامل', 'آسیا', 'body', 8000000, 800000000, false, false),
('بیمه مسئولیت مدنی', 'البرز', 'liability', 3000000, 2000000000, false, false),
('بیمه شخص ثالث ویژه', 'دانا', 'third_party', 6000000, 3000000000, false, true),
('بیمه بدنه پرمیوم', 'رازی', 'body', 12000000, 1500000000, false, true),
('بیمه جامع حوادث', 'سامان', 'comprehensive', 15000000, 5000000000, false, true);