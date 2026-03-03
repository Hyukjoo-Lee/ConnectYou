package com.connectyou.invitation_backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Entity
@Getter
@Setter
public class Wedding {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String slug; // 웨딩 고유 식별자 (e.g., "john-and-jane-wedding")

    // 기본 정보
    private String groomName;      // 신랑 한글 이름
    private String brideName;      // 신부 한글 이름

    private String groomNameEn;    // 신랑 영어 이름
    private String brideNameEn;    // 신부 영어 이름

    private String weddingDate;    // 웨딩 날짜 ( e.g., 2026년 3월 28일(토) )
    private String weddingTime;    // 웨딩 시간 ( e.g., 오후 12시 30분 )
    private String weddingAddress; // 웨딩 주소

    // 신랑 부모 정보
    private String groomFather;
    private String groomMother;

    // 신랑측 계좌 정보
    private String groomBankName;
    private String groomBankAccount;
    private String groomBankHolder;

    // 신부 부모 정보
    private String brideFather;
    private String brideMother;

    // 신부측 계좌 정보
    private String brideBankName;
    private String brideBankAccount;
    private String brideBankHolder;

    // 신랑측 연락처 정보
    private String groomPhone;
    private String groomEmail;

    // 신부측 연락처 정보
    private String bridePhone;
    private String brideEmail;

    // 초대 메시지
    @Column(columnDefinition = "TEXT")
    private String message;

    // 초대장 템플릿 유형
    private String templateType = "minimal";
}