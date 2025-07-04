"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PasskeyForm = () => {
  const [passkey, setPasskey] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 패스키 검증 로직을 여기에 구현
    console.log("패스키 입력:", passkey);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="passkey">패스키</Label>
        <Input
          id="passkey"
          type="password"
          value={passkey}
          onChange={(e) => setPasskey(e.target.value)}
          placeholder="패스키를 입력하세요"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="submit" variant="default">
          확인
        </Button>
      </div>
    </form>
  );
};

export default PasskeyForm; 