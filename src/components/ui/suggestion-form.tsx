'use client';

/**
 * Suggestion Form Component
 */

import { useState, useTransition } from 'react';
import { ChevronRight, Link as LinkIcon, AlertCircle, CheckCircle, ChevronDown } from 'lucide-react';
import { SuggestionSchema, type SuggestionFormData } from '@/src/lib/validation';
import { getCategoriesByPriority } from '@/src/data';
import { getIcon } from '@/src/utils/icon-utils';

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function FormField({ label, error, required, children }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1" role="alert">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}

interface SuggestionFormProps {
  className?: string;
}

export function SuggestionForm({ className }: SuggestionFormProps) {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState<Record<string, any>>({
    category: '',
    url: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const categories = getCategoriesByPriority();
  const isComingSoon = true; // Set to false when ready to enable

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const result = SuggestionSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach(error => {
        if (error.path.length > 0) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    startTransition(async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        setSubmitStatus('success');
        setFormData({
          category: '',
          url: '',
        });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } catch (error) {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    });
  };


  return (
    <div className={className}>
      <div className="flex items-center mb-2 md:mb-4">
        <div>
          <h3 id="suggest-form-heading" className="text-base font-medium text-foreground">
            Suggest a Resource
          </h3>
          <p className="text-sm text-foreground/60">
            Share something valuable you've discovered
          </p>
          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-amber-700">Coming Soon</span>
          </div>
        </div>
      </div>

      <div className="relative">
        {isComingSoon && (
          <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px] rounded-lg z-10 flex items-center justify-center">
            <div className="bg-background/90 border border-foreground/20 rounded-lg px-4 py-2 shadow-sm">
              <p className="text-sm text-foreground/60 text-center">Coming Soon</p>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5" role="form" aria-labelledby="suggest-form-heading">
        {/* Category Selection */}
        <FormField
          label="Category"
          error={errors.category}
          required
        >
          <div className="relative">
            <select
              value={formData.category || ''}
              onChange={(e) => handleInputChange('category', e.target.value)}
              className="w-full px-4 py-3 pr-12 bg-background/50 border border-foreground/20 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:border-foreground/60 focus:bg-background focus:shadow-sm focus:shadow-foreground/10 transition-all duration-200 appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isPending || isComingSoon}
            >
              <option value="">Select a category...</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
              <ChevronDown className="w-5 h-5 text-foreground/30" />
            </div>
          </div>
        </FormField>

        {/* URL Field */}
        <FormField
          label="Resource URL"
          error={errors.url}
          required
        >
          <div className="relative">
            <input
              id="resource-url"
              name="resource-url"
              type="url"
              value={formData.url || ''}
              onChange={(e) => handleInputChange('url', e.target.value)}
              placeholder="Paste a link..."
              className="w-full pl-4 pr-12 py-3 bg-background/50 border border-foreground/20 rounded-lg text-base placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:border-foreground/60 focus:bg-background focus:shadow-sm focus:shadow-foreground/10 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isPending || isComingSoon}
              required
              aria-describedby="url-help"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2" aria-hidden="true">
              <LinkIcon className="w-5 h-5 text-foreground/30" />
            </div>
            <div id="url-help" className="sr-only">
              Enter the URL of a resource you'd like to suggest for the archive
            </div>
          </div>
        </FormField>


        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending || isComingSoon}
          className="w-full px-5 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-base flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          aria-describedby="submit-help"
        >
          {isComingSoon ? (
            <span>Coming Soon</span>
          ) : isPending ? (
            <>
              <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : submitStatus === 'success' ? (
            <>
              <CheckCircle className="w-4 h-4" />
              <span>Suggestion Sent!</span>
            </>
          ) : (
            <>
              <span>Send Suggestion</span>
              <ChevronRight className="w-4 h-4" />
            </>
          )}
        </button>

        {submitStatus === 'error' && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Failed to send suggestion. Please try again.
            </p>
          </div>
        )}

        <div id="submit-help" className="sr-only">
          Submit your resource suggestion to be reviewed for inclusion in the archive
        </div>
        </form>
      </div>
    </div>
  );
}
