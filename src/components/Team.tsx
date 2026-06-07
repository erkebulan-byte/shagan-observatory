"use client";

import { useState } from "react";
import Image from "next/image";
import { X, BookOpen } from "lucide-react";
import { teamMembers, TeamMember } from "@/data/mockData";
import { useLang } from "@/context/LangContext";

function ProfileModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  const { t, lang } = useLang();
  const isKZ = lang === "KZ";
  const isEN = lang === "EN";
  const bio = isEN && member.bio_en ? member.bio_en : isKZ && member.bio_kz ? member.bio_kz : member.bio;
  const responsibility = isEN && member.responsibility_en ? member.responsibility_en : isKZ && member.responsibility_kz ? member.responsibility_kz : member.responsibility;
  const degree = isEN && member.degree_en ? member.degree_en : isKZ && member.degree_kz ? member.degree_kz : member.degree;
  const role = isEN && member.role_en ? member.role_en : isKZ && member.role_kz ? member.role_kz : member.role;
  const publications = isEN && member.publications_en ? member.publications_en : isKZ && member.publications_kz ? member.publications_kz : member.publications;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-[#F4F7FC] border-b border-[#E8EFF8] px-4 sm:px-6 pt-5 pb-4 flex items-center gap-3 sm:gap-5">
          <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#4A90E2]/40 flex-shrink-0 shadow-md">
            <Image
              src={member.avatar}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 56px, 80px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[#0F2C59] font-bold text-base sm:text-xl leading-tight">
              {member.name}
            </h3>
            <p className="text-[#4A90E2] font-medium text-sm mt-1">
              {degree}
            </p>
            <p className="text-[#6B7280] text-sm">{role}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-[#E2EAF4] text-[#6B7280] hover:text-[#0F2C59] transition-colors"
            aria-label="Закрыть"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-5 sm:gap-6">
          {/* Biography */}
          <div>
            <h4 className="text-[#0F2C59] font-semibold text-sm uppercase tracking-wide mb-3">
              {t("team_modal_bio")}
            </h4>
            <p className="text-[#1E3E62] text-sm leading-relaxed mb-3">
              {bio}
            </p>
            <div className="bg-[#F4F7FC] rounded-xl p-4 border border-[#E2EAF4]">
              <p className="text-[#6B7280] text-xs font-semibold uppercase tracking-wide mb-2">
                {t("team_modal_role")}
              </p>
              <p className="text-[#1E3E62] text-sm leading-relaxed">
                {responsibility}
              </p>
            </div>
          </div>

          {/* Publications */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={15} className="text-[#4A90E2]" />
              <h4 className="text-[#0F2C59] font-semibold text-sm uppercase tracking-wide">
                {t("team_modal_pubs")}
              </h4>
            </div>
            <ul className="flex flex-col gap-3">
              {publications.map((pub, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-sm text-[#1E3E62] leading-relaxed"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EBF3FC] text-[#4A90E2] text-xs font-bold flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{pub}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function MemberCard({
  member,
  onOpen,
}: {
  member: TeamMember;
  onOpen: () => void;
}) {
  const [avatarHovered, setAvatarHovered] = useState(false);
  const { t, lang } = useLang();
  const isKZ = lang === "KZ";
  const isEN = lang === "EN";
  const degree = isEN && member.degree_en ? member.degree_en : isKZ && member.degree_kz ? member.degree_kz : member.degree;
  const role = isEN && member.role_en ? member.role_en : isKZ && member.role_kz ? member.role_kz : member.role;

  return (
    <article
      className={`flex flex-col items-center text-center gap-3 p-6 bg-[#F4F7FC] border border-[#E2EAF4] rounded-2xl hover:border-[#4A90E2]/50 hover:shadow-md transition-all duration-200 cursor-pointer group relative ${avatarHovered ? "z-20" : "z-0"}`}
      onClick={onOpen}
    >
      {/* Fixed-size placeholder so the card layout never shifts */}
      <div className="relative flex-shrink-0" style={{ width: 96, height: 96 }}>
        {/* Avatar — expands and loses the circular crop on hover */}
        <div
          onMouseEnter={() => setAvatarHovered(true)}
          onMouseLeave={() => setAvatarHovered(false)}
          style={{
            position: "absolute",
            left: avatarHovered ? "-32px" : "0px",
            top: avatarHovered ? "-48px" : "0px",
            width: avatarHovered ? "160px" : "96px",
            height: avatarHovered ? "200px" : "96px",
            borderRadius: avatarHovered ? "14px" : "50%",
            overflow: "hidden",
            transition:
              "left 0.35s cubic-bezier(0.4,0,0.2,1), top 0.35s cubic-bezier(0.4,0,0.2,1), width 0.35s cubic-bezier(0.4,0,0.2,1), height 0.35s cubic-bezier(0.4,0,0.2,1), border-radius 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s ease, border-color 0.35s ease",
            zIndex: avatarHovered ? 30 : 1,
            boxShadow: avatarHovered
              ? "0 16px 48px rgba(15,44,89,0.30)"
              : "0 1px 4px rgba(0,0,0,0.10)",
            border: `2px solid ${avatarHovered ? "#4A90E2" : "#E2EAF4"}`,
          }}
        >
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 160px, 160px"
          />
        </div>
      </div>

      <div>
        <p className="text-[#0F2C59] font-bold text-base leading-tight">
          {member.name}
        </p>
        <p className="text-[#4A90E2] text-xs font-medium mt-1">{degree}</p>
        <p className="text-[#6B7280] text-xs mt-0.5">{role}</p>
      </div>
      <span className="text-[#4A90E2] text-xs font-semibold group-hover:underline">
        {t("team_more")}
      </span>
    </article>
  );
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const { t } = useLang();

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#4A90E2] text-xs font-semibold uppercase tracking-widest mb-3">
          {t("team_label")}
        </p>
        <h2 className="text-[#0F2C59] font-bold text-2xl sm:text-3xl mb-10">
          {t("team_heading")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {teamMembers.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              onOpen={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {selectedMember && (
        <ProfileModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
}
