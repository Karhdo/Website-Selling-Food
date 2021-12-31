<?php
    namespace App\Traits;
    use Illuminate\Support\Facades\Storage;
    trait StorageImageTrait{
        public function storageTraitUpload($request, $fieldName, $folderName) {
            if($request->hasFile($fieldName))
            {
                $file = $request->$fieldName;
                $fileNameOrigin = $file->getClientOriginalName(); // Lấy tên gốc của file
                $fileNameHash = str_random(20) . '.' . $file->getClientOriginalExtension();
                $filePath = $request->file($fieldName)->storeAs('public/'. $folderName. '/' .auth()->id(), $fileNameHash);
                $dataUploadTrait = [
                    'file_name' => $fileNameOrigin,
                    'file_path' => Storage::url($filePath) // Đổi đường dẫn qua public/storage thì mới truy cập được
                ];
                return $dataUploadTrait;
            }
            return null;
        }
    }
?>